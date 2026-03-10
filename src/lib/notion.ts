/**
 * Notion helpers for docs. Pages must be published to the web (Share > Publish) for notion-client to fetch them.
 */

const DEFAULT_INTERVIEW_PAGE_ID = "31dfb592ccdd80e78f82cc56a3fc15b9";

export const NOTION_INTERVIEW_PAGE_ID =
  typeof import.meta.env !== "undefined" &&
  import.meta.env.PUBLIC_NOTION_INTERVIEW_PAGE_ID
    ? String(import.meta.env.PUBLIC_NOTION_INTERVIEW_PAGE_ID).trim()
    : DEFAULT_INTERVIEW_PAGE_ID;

export type NotionPageData = {
  recordMap: Awaited<
    ReturnType<InstanceType<typeof import("notion-client").NotionAPI>["getPage"]>
  >;
  rootPageId: string;
};

/** Fetches a Notion page by ID at build time. Returns null if the page is private or fetch fails. */
export async function getNotionPage(
  pageId: string
): Promise<NotionPageData | null> {
  try {
    const { NotionAPI } = await import("notion-client");
    const api = new NotionAPI();
    const recordMap = await api.getPage(pageId);
    return { recordMap, rootPageId: pageId };
  } catch {
    return null;
  }
}
