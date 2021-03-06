import request from '@/utils/request';

export const getSongsByKeyWord = (params: any) =>
    request({
        url: `/cloud/search?keywords=${params.text}`,
        method: 'post',
    });

export const getSongUrl = (contentId: string) =>
    request({
        url: `/song?type=song&id=${contentId}`,
        method: 'post',
    });

export const getSongsByPlayListId = (id: number) =>
    request({
        url: `/cloud/playlist/detail?id=${id}`,
        method: 'post',
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
