export class AppSetInitialUserRoleAction {
  static readonly type = '[app.component] set initial User Role'
}

export class AppStateSetGlobalLoadingOverlayAction {
  static readonly type = '[LoadingInterceptor] set global loading overlay'

  constructor(public isLoading: boolean) {
  }
}
