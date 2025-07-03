import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AppSetInitialUserRoleAction, AppStateSetGlobalLoadingOverlayAction } from './app.action';

enum EnumUserRoles {
  READ = 'termo_read_user',
  WRITE = 'termo_process_steering_responsible'
}

export interface IAppState {
  user: any,
  authorized: boolean
  isLoading: boolean
}

@State<IAppState>({
  name: 'AppState',
  defaults: {
    user: {
      familyName: "",
      roles: []
    },
    authorized: true,
    isLoading: true
  }
})

@Injectable()
export class AppState {

  @Selector()
  static appStateUserRoles(state: IAppState): string[] {
    return state.user.roles
  }

  @Selector()
  static hasWriteRights(state: IAppState): boolean {
    return state.user.roles?.includes(EnumUserRoles.WRITE) ?? false
  }

  @Selector()
  static appStateAuthorized(state: IAppState): boolean {
    return state.authorized
  }

  @Selector()
  static appStateUser(state: IAppState) {
    return state.user
  }

  @Selector()
  static appStateIsLoading(state: IAppState) {
    return state.isLoading
  }

  @Action(AppSetInitialUserRoleAction)
  setInitialUserRole(ctx: StateContext<IAppState>) {
    ctx.patchState({
      user: {
        familyName: "Musterman",
        roles: [1, 2, 3, 4]
      }
    })
    /*        this.openApiApiService.getCurrentUser().subscribe({
                    next: (userInfo: UserDataDoModel) => {
                        ctx.patchState({
                            user: userInfo
                        })
                    }
                }
            )*/
  }

  @Action(AppStateSetGlobalLoadingOverlayAction)
  setLoadingOverlay(ctx: StateContext<IAppState>, isLoading: AppStateSetGlobalLoadingOverlayAction) {
    ctx.patchState(
      isLoading
    )
  }
}
