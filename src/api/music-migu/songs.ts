import request from '@/utils/request';
interface SearchParam {
    contentId: string;
    formatType: 'SQ' | 'HQ ',
    resourceType: 'E' | '2';
}
export const getSongsByKeyWord = (params: any) =>
    request({
        url: `/migu/MIGUM3.0/v1.0/content/search_all.do?&version=5.0.1&text=${params.text}&pageNo=${params.pageNo}&pageSize=${params.pageSize}&searchSwitch={"song":1,"album":0,"singer":0,"tagSong":0,"mvSong":0,"songlist":0,"bestShow":1}`,
        method: 'get',
    });

export const getSongUrl = (contentId: string) =>
    request({
        url: `/song/MIGUM2.0/v1.0/content/sub/listenSong.do?toneFlag=HQ&netType=00&userId=15548614588710179085069&ua=Android_migu&version=5.1&copyrightId=0&contentId=600908000000209496&resourceType=2&channel=0`,
        method: 'get',
    });

export const updateRole = (id: number, data: any) =>
    request({
        url: `/ roles / ${id}`,
        method: 'put',
        data
    });

export const deleteRole = (id: number) =>
    request({
        url: `/ roles / ${id}`,
        method: 'delete'
    });

export const getRoutes = (params: any) =>
    request({
        url: '/routes',
        method: 'get',
        params
    });;
