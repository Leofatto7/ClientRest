import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ChartType, ScriptLoaderService } from "angular-google-charts";
import { MatSort } from '@angular/material/sort';
import { ConstantsService } from '../common/services/constants.service';
import { DatePipe } from '@angular/common';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as moment from 'moment';

export interface Response {
  code: number;
  message: string;
  data: Observation[];
}

export interface Observation {
  id: number
  datetime: string;
  aTemp: number;
  aHum: number;
  bTemp: number;
  bHum: number;
  extTemp: number;
  extHum: number;
}

export interface QueryParameters {
  start?: string;
  end?: string;
  day?: number;
  month?: number;
  year?: number;
  results?: number;
}

@Component({
  selector: 'app-getrequest',
  templateUrl: './getrequest.component.html',
  styleUrls: ['./getrequest.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'it-IT' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ]
})

export class GETrequestComponent implements OnInit {
  apiURL: string;
  response!: Response;
  hasData!: boolean;
  datepipe: DatePipe = new DatePipe('it');

  matData!: MatTableDataSource<Observation>;
  matColumns: string[] = ['id', 'datetime', 'aTemp', 'aHum', 'bTemp', 'bHum', 'extTemp', 'extHum'];
  @ViewChild(MatSort) matSort!: MatSort;

  chartType = ChartType.LineChart;
  chartDateFormatters: any;

  chartTempColumns: any[] = [
    { label: 'Data', type: 'date' },
    { label: 'Temperatura A', type: 'number' },
    { label: 'Temperatura B', type: 'number' },
    { label: 'Temperatura esterna', type: 'number' }
  ];
  chartTempData: any[] = [];
  chartTempOptions: any = {
    title: 'Grafico delle temperature',
    vAxis: { label: 'Temperatura (°C)' },
    height: 500,
    legend: { position: 'bottom' },
    curveType: 'function',
    theme: 'material'
  };

  chartHumColumns: any[] = [
    { label: 'Data', type: 'date' },
    { label: 'Umidità A', type: 'number' },
    { label: 'Umidità B', type: 'number' },
    { label: 'Umidità esterna', type: 'number' }
  ];
  chartHumData: any[] = [];
  chartHumOptions: any = {
    title: 'Grafico delle umidità',
    vAxis: { label: 'Umidità (%)' },
    height: 500,
    legend: { position: 'bottom' },
    curveType: 'function',
    theme: 'material'
  };
  defaultSorting: string = 'desc';

  constructor(private http: HttpClient, private loaderService: ScriptLoaderService, private constants: ConstantsService) {
    this.apiURL = constants.API_URL + '/observations';
  }

  ngOnInit() {
    this.loaderService.loadChartPackages().subscribe(() => {
      this.chartDateFormatters = [
        {
          formatter: new google.visualization.DateFormat({ pattern: "d/MM/yyyy, HH:mm" }),
          colIndex: 0
        }
      ];
    });

    this.load(null, null, null, null, null, '100', 'desc');
  }

  load(start: string | null , end: string | null, day: string | null, month: string | null, year: string | null, results: string | null, sort: string | null) {
    let params: HttpParams = new HttpParams();

    if (start !== null && start !== '')
      params = params.set('start', moment(start, 'DD/MM/yyyy').format('yyyy-MM-DD HH:mm:ss'));

    if (end !== null && end !== '')
      params = params.set('end', moment(end, 'DD/MM/yyyy').format('yyyy-MM-DD HH:mm:ss'));

    if (day !== null && day !== '')
      params = params.set('day', day);

    if (month !== null && month !== '')
      params = params.set('month', month);

    if (year !== null && year !== '')
      params = params.set('year', year);

    if (results !== null && results !== '')
      params = params.set('results', results);

    if (sort !== null && sort !== '')
      params = params.set('sort', sort);

    this.http.get<Response>(this.apiURL, { params: params }).subscribe(response => {
      this.response = response;
      this.matData = new MatTableDataSource(this.response.data);
      this.matData.sort = this.matSort;

      this.chartTempData = [];
      this.chartHumData = [];

      this.response.data.forEach(observation => {
        this.chartTempData.push([new Date(observation.datetime), observation.aTemp, observation.bTemp, observation.extTemp]);
        this.chartHumData.push([new Date(observation.datetime), observation.aHum, observation.bHum, observation.extHum]);
        observation.datetime = this.datepipe.transform(observation.datetime, 'dd/MM/yyyy HH:mm:ss') as string;
      });

      this.hasData = true;
    });
  }
}
