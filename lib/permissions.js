/**
 * handles post maniplation permissions.
 *
 * path: client/lib/permissions.js
 * author: Shawn Chowdhury
 * date: 2014-04-06
 */

// check that the userId specified owns the documents
ownsDocument = function(userId, doc) {
    return doc && doc.userId === userId;
}
