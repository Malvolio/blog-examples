class AccumLogService {
  constructor(private simpleLogService: SimpleLogService) {}
  logAllThisData(data: Observable<string>): Observable<void> {
    return data.pipe(reduce((acc: string[], v: string[]) => acc.concat([v]), []),
                     concatMap(total => this.simpleLogService.logArray(total)));
  }
}
