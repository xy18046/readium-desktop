// ==LICENSE-BEGIN==
// Copyright 2017 European Digital Reading Lab. All rights reserved.
// Licensed to the Readium Foundation under one or more contributor license agreements.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file exposed on Github (readium) in the project repository.
// ==LICENSE-END==

import {
    IEventPayload_R2_EVENT_CLIPBOARD_COPY,
} from "r2-navigator-js/dist/es6-es2015/src/electron/common/events";
import { LocatorView } from "readium-desktop/common/views/locator";

import { Locator as R2Locator } from "@r2-shared-js/models/locator";

export interface IReaderApi {
    setLastReadingLocation: (publicationIdentifier: string, locator: R2Locator) => Promise<LocatorView>;
    getLastReadingLocation: (publicationIdentifier: string) => Promise<LocatorView>;
    findBookmarks: (publicationIdentifier: string) => Promise<LocatorView[]>;
    updateBookmark: (
        identifier: string,
        publicationIdentifier: string,
        locator: R2Locator,
        name?: string,
    ) => Promise<void>;
    addBookmark: (
        publicationIdentifier: string,
        locator: R2Locator,
        name?: string,
    ) => Promise<void>;
    deleteBookmark: (identifier: string) => Promise<void>;
    clipboardCopy: (
        publicationIdentifier: string,
        clipboardData: IEventPayload_R2_EVENT_CLIPBOARD_COPY) => Promise<boolean>;
}

export interface IReaderModuleApi {
    "reader/setLastReadingLocation": IReaderApi["setLastReadingLocation"];
    "reader/getLastReadingLocation": IReaderApi["getLastReadingLocation"];
    "reader/findBookmarks": IReaderApi["findBookmarks"];
    "reader/updateBookmark": IReaderApi["updateBookmark"];
    "reader/addBookmark": IReaderApi["addBookmark"];
    "reader/deleteBookmark": IReaderApi["deleteBookmark"];
    "reader/clipboardCopy": IReaderApi["clipboardCopy"];
}
