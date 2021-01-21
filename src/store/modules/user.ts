import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators';
import store from '@/store';
import { getUserPlayList } from '@/api/music-163/cloudUser';

export interface UserState {
    //   token: string
    name: string;
    avatar: string;
    introduction: string;
    roles: string[];
    email: string;
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements UserState {
    //   public token = getToken() || ''
    public name = '请登录';
    public avatar = '';
    public introduction = '';
    public roles: string[] = [];
    public email = '';
    public account = {

    };
    public profile = {
        nickname: '请登录',
        avatarUrl: '',
        userId: 0
    };

    public playLists = [];

    public dailyRecommand = [];
    //   @Mutation
    //   private SET_TOKEN(token: string) {
    //     this.token = token
    //   }

    @Mutation
    private SET_NAME(name: string) {
        this.name = name;
    }

    @Mutation
    private SET_AVATAR(avatar: string) {
        this.avatar = avatar;
    }

    @Mutation
    private SET_ACCOUNT(account: any) {
        this.account = account;
    }

    @Mutation
    private SET_PROFILE(profile: any) {
        this.profile = profile;
    }

    @Mutation
    private SET_PLAY_LIST(playLists: any) {
        this.playLists = playLists;
    }

    @Mutation
    private SET_EMAIL(email: string) {
        this.email = email;
    }

    @Mutation
    private SET_DAILY_RECOMMAND(dailyRecommand: any) {
        this.dailyRecommand = dailyRecommand;
    }

    @Action
    public saveUserInfo(userInfo: any) {
        this.SET_ACCOUNT(userInfo.account);
        this.SET_PROFILE(userInfo.profile);
    }

    @Action
    public savePlayList(playLists: any) {
        this.SET_PLAY_LIST(playLists);
    }

    @Action
    public saveDailyRecommand(dailyRecommand: any) {
        this.SET_DAILY_RECOMMAND(dailyRecommand);
    }

    //   @Action
    //   public ResetToken() {
    //     removeToken()
    //     this.SET_TOKEN('')
    //     this.SET_ROLES([])
    //   }

    //   @Action
    //   public async GetUserInfo() {
    //     if (this.token === '') {
    //       throw Error('GetUserInfo: token is undefined!')
    //     }
    //     const { data } = await getUserInfo({ /* Your params here */ })
    //     if (!data) {
    //       throw Error('Verification failed, please Login again.')
    //     }
    //     const { roles, name, avatar, introduction, email } = data.user
    //     // roles must be a non-empty array
    //     if (!roles || roles.length <= 0) {
    //       throw Error('GetUserInfo: roles must be a non-null array!')
    //     }
    //     this.SET_ROLES(roles)
    //     this.SET_NAME(name)
    //     this.SET_AVATAR(avatar)
    //     this.SET_INTRODUCTION(introduction)
    //     this.SET_EMAIL(email)
    //   }

    //   @Action
    //   public async ChangeRoles(role: string) {
    //     // Dynamically modify permissions
    //     const token = role + '-token'
    //     this.SET_TOKEN(token)
    //     setToken(token)
    //     await this.GetUserInfo()
    //     resetRouter()
    //     // Generate dynamic accessible routes based on roles
    //     PermissionModule.GenerateRoutes(this.roles)
    //     // Add generated routes
    //     router.addRoutes(PermissionModule.dynamicRoutes)
    //     // Reset visited views and cached views
    //     TagsViewModule.delAllViews()
    //   }

    //   @Action
    //   public async LogOut() {
    //     if (this.token === '') {
    //       throw Error('LogOut: token is undefined!')
    //     }
    //     await logout()
    //     removeToken()
    //     resetRouter()

    //     // Reset visited views and cached views
    //     TagsViewModule.delAllViews()
    //     this.SET_TOKEN('')
    //     this.SET_ROLES([])
    //   }
    // }
}
export const UserModule = getModule(User);

