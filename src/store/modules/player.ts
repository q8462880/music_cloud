import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';
import store from '@/store';

export interface MyPlayerState {
    loadingPlayerInfo: boolean;
    songSmallCardInfo: any;
    currentPlaySongUrl: string;
    showPlayerFooter: boolean;
}

@Module({ dynamic: true, store, name: 'myPlayer' })
class MyPlayer extends VuexModule implements MyPlayerState {
    public loadingPlayerInfo = false;
    public songSmallCardInfo = [];
    public currentPlaySongUrl = '';
    public showPlayerFooter = false;
    public playing = false;

    @Mutation
    private SET_PLAYER_FOOTER_STATU(open: boolean) {
        this.showPlayerFooter = open;
    }

    @Mutation
    private SET_PLAYER_STATU(open: boolean) {
        this.playing = open;
    }

    @Mutation
    private SET_CURRENT_PLAY_SONG_URL(url: string) {
        this.currentPlaySongUrl = url;
    }

    @Mutation
    private REFRESH_SONG_SMALL_CARDS(cardList: any) {
        this.songSmallCardInfo = cardList;
    }

    @Action
    public setPlayerFooterStatu(open: boolean) {
        this.SET_PLAYER_FOOTER_STATU(open);
    }

    @Action
    public setPlayerStatu(open: boolean) {
        this.SET_PLAYER_STATU(open);
    }

    @Action
    public setCurrentPlaySongUrl(url: string) {
        this.SET_CURRENT_PLAY_SONG_URL(url);
    }
    @Action
    public refreshSongSmallCards(cardList: any) {
        this.REFRESH_SONG_SMALL_CARDS(cardList);
    }
}

export const MyPlayerModule = getModule(MyPlayer);


