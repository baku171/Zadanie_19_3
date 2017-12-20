import uuid from 'uuid';

const ADD_COMMENT = 'ADD_COMMENT';
{
    type: ADD_COMMENT,
    text: 'Comment text',
    id: 20
}

const REMOVE_COMMENT = 'REMOVE_COMMENT';
{
    type: REMOVE_COMMENT,
    id: 20
}

const EDIT_COMMENT = 'EDIT_COMMENT';
{
    type: EDIT_COMMENT,
    id: 20,
    text: 'New comment text'
}

const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
{
    type: THUMB_UP_COMMENT,
    id: 20
}

const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
{
    type: THUMB_DOWN_COMMENT,
    id: 20
}

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id,
        text
    }
}

function thumbUp(id) {
    return {
        type: THUMB_UP_COMMENT,
        id
    }
}

function thumbDown(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id
    }
}







