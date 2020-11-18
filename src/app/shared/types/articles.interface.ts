import { IProfile } from './profile.interface';

export interface IArticles {
author: IProfile
body: string
createdAt: string
description: string
favorited: boolean
favoritesCount: number
slug: string
tagList: string[]
title: string
updatedAt: string
}