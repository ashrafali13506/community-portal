export interface Forum {
    createdDate?: Date
    updatedDate?: Date,
    forumId?: string,
    forumTitle?: string,
    isdefaultForum?: boolean,
    visitCount?: Number,
    isactive?: false
}

export interface Thread { 
    active: boolean
    createdDate: Date
    forumId: string
    threadDesc: string
    threadID: string
    threadTitle: string
    updatedDate: Date
    visitCount: Number
}