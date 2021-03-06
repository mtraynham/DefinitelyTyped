// Type definitions for expect-puppeteer 2.2
// Project: https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer
// Definitions by: Josh Goldberg <https://github.com/JoshuaKGoldberg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="jest" />

import { ElementHandle, Page } from "puppeteer";

/**
 * Interval at which pageFunctions may be executed.
 */
type ExpectPolling = number | "mutation" | "raf";

/**
 * Configures how to poll for an element.
 */
interface ExpectTimingActions {
    /**
     * An interval at which the pageFunction is executed. Defaults to "raf".
     */
    polling?: ExpectPolling;

    /**
     * Maximum time to wait for in milliseconds. Defaults to 500.
     */
    timeout?: number;
}

interface ExpectToClickOptions extends ExpectTimingActions {
    /**
     * A text or a RegExp to match in element textContent.
     */
    text?: string | RegExp;
}

interface ExpectPuppeteer {
    toClick(selector: string, options?: ExpectToClickOptions): Promise<void>;
    toDisplayDialog(block: () => Promise<void>): Promise<void>;
    toFill(selector: string, value: string, options?: ExpectTimingActions): Promise<void>;
    toMatchElement(selector: string, value: string, options?: ExpectTimingActions): Promise<void>;
    toSelect(selector: string, valueOrText: string, options?: ExpectTimingActions): Promise<void>;
    toUploadFile(selector: string, filePath: string, options?: ExpectTimingActions): Promise<void>;
}

declare global {
    namespace jest {
        // tslint:disable-next-line no-empty-interface
        interface Matchers<R> extends ExpectPuppeteer { }
    }
}

declare function expectPuppeteer(instance: ElementHandle | Page): ExpectPuppeteer;
export = expectPuppeteer;
