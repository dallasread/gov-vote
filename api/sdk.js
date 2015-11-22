(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.GovVoteAPI = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var API = {
    debug: false,

    issues: function issues(data, headers, done) {
        if (!done && typeof headers === 'function') {
            done = headers;
            headers = null;
        }

        if (!done && this.debug) {
            console.warn('No callback supplied.');
        }

        $.ajax({
            method: 'POST',
            url: 'http://localhost:8000/issues',
            data: 'POST' === 'GET' ? data : JSON.stringify(data),
            contentType: 'application/json; charset=utf-8',
            beforeSend: function (xhr) {
                for (var key in headers) {
                    xhr.setRequestHeader(key, headers[key]);
                }
            },
            complete: function(data) {
                if (data.responseJSON) {
                    if (data.responseJSON.errorMessage) {
                        typeof done === 'function' && done(data.responseJSON, null);
                    } else {
                        typeof done === 'function' && done(null, data.responseJSON);
                    }
                } else {
                    typeof done === 'function' && done(new Error('Could not complete network request.'));
                }
            }
        });
    },
    issues: function issues(data, headers, done) {
        if (!done && typeof headers === 'function') {
            done = headers;
            headers = null;
        }

        if (!done && this.debug) {
            console.warn('No callback supplied.');
        }

        $.ajax({
            method: 'GET',
            url: 'http://localhost:8000/issues',
            data: 'GET' === 'GET' ? data : JSON.stringify(data),
            contentType: 'application/json; charset=utf-8',
            beforeSend: function (xhr) {
                for (var key in headers) {
                    xhr.setRequestHeader(key, headers[key]);
                }
            },
            complete: function(data) {
                if (data.responseJSON) {
                    if (data.responseJSON.errorMessage) {
                        typeof done === 'function' && done(data.responseJSON, null);
                    } else {
                        typeof done === 'function' && done(null, data.responseJSON);
                    }
                } else {
                    typeof done === 'function' && done(new Error('Could not complete network request.'));
                }
            }
        });
    },
    issuesId: function issuesId(data, headers, done) {
        if (!done && typeof headers === 'function') {
            done = headers;
            headers = null;
        }

        if (!done && this.debug) {
            console.warn('No callback supplied.');
        }

        $.ajax({
            method: 'PUT',
            url: 'http://localhost:8000/issues/{id}',
            data: 'PUT' === 'GET' ? data : JSON.stringify(data),
            contentType: 'application/json; charset=utf-8',
            beforeSend: function (xhr) {
                for (var key in headers) {
                    xhr.setRequestHeader(key, headers[key]);
                }
            },
            complete: function(data) {
                if (data.responseJSON) {
                    if (data.responseJSON.errorMessage) {
                        typeof done === 'function' && done(data.responseJSON, null);
                    } else {
                        typeof done === 'function' && done(null, data.responseJSON);
                    }
                } else {
                    typeof done === 'function' && done(new Error('Could not complete network request.'));
                }
            }
        });
    },
    issuesId: function issuesId(data, headers, done) {
        if (!done && typeof headers === 'function') {
            done = headers;
            headers = null;
        }

        if (!done && this.debug) {
            console.warn('No callback supplied.');
        }

        $.ajax({
            method: 'GET',
            url: 'http://localhost:8000/issues/{id}',
            data: 'GET' === 'GET' ? data : JSON.stringify(data),
            contentType: 'application/json; charset=utf-8',
            beforeSend: function (xhr) {
                for (var key in headers) {
                    xhr.setRequestHeader(key, headers[key]);
                }
            },
            complete: function(data) {
                if (data.responseJSON) {
                    if (data.responseJSON.errorMessage) {
                        typeof done === 'function' && done(data.responseJSON, null);
                    } else {
                        typeof done === 'function' && done(null, data.responseJSON);
                    }
                } else {
                    typeof done === 'function' && done(new Error('Could not complete network request.'));
                }
            }
        });
    },
    stances: function stances(data, headers, done) {
        if (!done && typeof headers === 'function') {
            done = headers;
            headers = null;
        }

        if (!done && this.debug) {
            console.warn('No callback supplied.');
        }

        $.ajax({
            method: 'POST',
            url: 'http://localhost:8000/stances',
            data: 'POST' === 'GET' ? data : JSON.stringify(data),
            contentType: 'application/json; charset=utf-8',
            beforeSend: function (xhr) {
                for (var key in headers) {
                    xhr.setRequestHeader(key, headers[key]);
                }
            },
            complete: function(data) {
                if (data.responseJSON) {
                    if (data.responseJSON.errorMessage) {
                        typeof done === 'function' && done(data.responseJSON, null);
                    } else {
                        typeof done === 'function' && done(null, data.responseJSON);
                    }
                } else {
                    typeof done === 'function' && done(new Error('Could not complete network request.'));
                }
            }
        });
    },
    stances: function stances(data, headers, done) {
        if (!done && typeof headers === 'function') {
            done = headers;
            headers = null;
        }

        if (!done && this.debug) {
            console.warn('No callback supplied.');
        }

        $.ajax({
            method: 'GET',
            url: 'http://localhost:8000/stances',
            data: 'GET' === 'GET' ? data : JSON.stringify(data),
            contentType: 'application/json; charset=utf-8',
            beforeSend: function (xhr) {
                for (var key in headers) {
                    xhr.setRequestHeader(key, headers[key]);
                }
            },
            complete: function(data) {
                if (data.responseJSON) {
                    if (data.responseJSON.errorMessage) {
                        typeof done === 'function' && done(data.responseJSON, null);
                    } else {
                        typeof done === 'function' && done(null, data.responseJSON);
                    }
                } else {
                    typeof done === 'function' && done(new Error('Could not complete network request.'));
                }
            }
        });
    },
    stancesId: function stancesId(data, headers, done) {
        if (!done && typeof headers === 'function') {
            done = headers;
            headers = null;
        }

        if (!done && this.debug) {
            console.warn('No callback supplied.');
        }

        $.ajax({
            method: 'PUT',
            url: 'http://localhost:8000/stances/{id}',
            data: 'PUT' === 'GET' ? data : JSON.stringify(data),
            contentType: 'application/json; charset=utf-8',
            beforeSend: function (xhr) {
                for (var key in headers) {
                    xhr.setRequestHeader(key, headers[key]);
                }
            },
            complete: function(data) {
                if (data.responseJSON) {
                    if (data.responseJSON.errorMessage) {
                        typeof done === 'function' && done(data.responseJSON, null);
                    } else {
                        typeof done === 'function' && done(null, data.responseJSON);
                    }
                } else {
                    typeof done === 'function' && done(new Error('Could not complete network request.'));
                }
            }
        });
    },
    stancesId: function stancesId(data, headers, done) {
        if (!done && typeof headers === 'function') {
            done = headers;
            headers = null;
        }

        if (!done && this.debug) {
            console.warn('No callback supplied.');
        }

        $.ajax({
            method: 'GET',
            url: 'http://localhost:8000/stances/{id}',
            data: 'GET' === 'GET' ? data : JSON.stringify(data),
            contentType: 'application/json; charset=utf-8',
            beforeSend: function (xhr) {
                for (var key in headers) {
                    xhr.setRequestHeader(key, headers[key]);
                }
            },
            complete: function(data) {
                if (data.responseJSON) {
                    if (data.responseJSON.errorMessage) {
                        typeof done === 'function' && done(data.responseJSON, null);
                    } else {
                        typeof done === 'function' && done(null, data.responseJSON);
                    }
                } else {
                    typeof done === 'function' && done(new Error('Could not complete network request.'));
                }
            }
        });
    },
    votes: function votes(data, headers, done) {
        if (!done && typeof headers === 'function') {
            done = headers;
            headers = null;
        }

        if (!done && this.debug) {
            console.warn('No callback supplied.');
        }

        $.ajax({
            method: 'POST',
            url: 'http://localhost:8000/votes',
            data: 'POST' === 'GET' ? data : JSON.stringify(data),
            contentType: 'application/json; charset=utf-8',
            beforeSend: function (xhr) {
                for (var key in headers) {
                    xhr.setRequestHeader(key, headers[key]);
                }
            },
            complete: function(data) {
                if (data.responseJSON) {
                    if (data.responseJSON.errorMessage) {
                        typeof done === 'function' && done(data.responseJSON, null);
                    } else {
                        typeof done === 'function' && done(null, data.responseJSON);
                    }
                } else {
                    typeof done === 'function' && done(new Error('Could not complete network request.'));
                }
            }
        });
    },
    votes: function votes(data, headers, done) {
        if (!done && typeof headers === 'function') {
            done = headers;
            headers = null;
        }

        if (!done && this.debug) {
            console.warn('No callback supplied.');
        }

        $.ajax({
            method: 'GET',
            url: 'http://localhost:8000/votes',
            data: 'GET' === 'GET' ? data : JSON.stringify(data),
            contentType: 'application/json; charset=utf-8',
            beforeSend: function (xhr) {
                for (var key in headers) {
                    xhr.setRequestHeader(key, headers[key]);
                }
            },
            complete: function(data) {
                if (data.responseJSON) {
                    if (data.responseJSON.errorMessage) {
                        typeof done === 'function' && done(data.responseJSON, null);
                    } else {
                        typeof done === 'function' && done(null, data.responseJSON);
                    }
                } else {
                    typeof done === 'function' && done(new Error('Could not complete network request.'));
                }
            }
        });
    },
    sessions: function sessions(data, headers, done) {
        if (!done && typeof headers === 'function') {
            done = headers;
            headers = null;
        }

        if (!done && this.debug) {
            console.warn('No callback supplied.');
        }

        $.ajax({
            method: 'POST',
            url: 'http://localhost:8000/sessions',
            data: 'POST' === 'GET' ? data : JSON.stringify(data),
            contentType: 'application/json; charset=utf-8',
            beforeSend: function (xhr) {
                for (var key in headers) {
                    xhr.setRequestHeader(key, headers[key]);
                }
            },
            complete: function(data) {
                if (data.responseJSON) {
                    if (data.responseJSON.errorMessage) {
                        typeof done === 'function' && done(data.responseJSON, null);
                    } else {
                        typeof done === 'function' && done(null, data.responseJSON);
                    }
                } else {
                    typeof done === 'function' && done(new Error('Could not complete network request.'));
                }
            }
        });
    },
    sessionsAuth: function sessionsAuth(data, headers, done) {
        if (!done && typeof headers === 'function') {
            done = headers;
            headers = null;
        }

        if (!done && this.debug) {
            console.warn('No callback supplied.');
        }

        $.ajax({
            method: 'POST',
            url: 'http://localhost:8000/sessions/auth',
            data: 'POST' === 'GET' ? data : JSON.stringify(data),
            contentType: 'application/json; charset=utf-8',
            beforeSend: function (xhr) {
                for (var key in headers) {
                    xhr.setRequestHeader(key, headers[key]);
                }
            },
            complete: function(data) {
                if (data.responseJSON) {
                    if (data.responseJSON.errorMessage) {
                        typeof done === 'function' && done(data.responseJSON, null);
                    } else {
                        typeof done === 'function' && done(null, data.responseJSON);
                    }
                } else {
                    typeof done === 'function' && done(new Error('Could not complete network request.'));
                }
            }
        });
    },
};

if (window) window.GovVoteAPI = API;
module.exports = API;

},{}]},{},[1])(1)
});