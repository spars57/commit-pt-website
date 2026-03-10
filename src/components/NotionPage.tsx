import type { ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/styles.css";

export interface NotionPageProps {
  /** Notion page data from notion-client's getPage(). */
  recordMap: ExtendedRecordMap;
  /** Root page ID (usually the same as the page you fetched). */
  rootPageId?: string;
  /** Wrapper class (e.g. for max-width and padding). Default: docs-style container. */
  className?: string;
  /** Render as full page (header, etc.). Default: false. */
  fullPage?: boolean;
  /** Dark mode. Default: false. */
  darkMode?: boolean;
  /** Class for the Notion body content. */
  bodyClassName?: string;
}

const defaultClassName = "notion-page max-w-3xl mx-auto px-4 py-8";

export default function NotionPage({
  recordMap,
  rootPageId,
  className = defaultClassName,
  fullPage = false,
  darkMode = false,
  bodyClassName = "notion-body",
}: NotionPageProps) {
  return (
    <div className={className}>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={fullPage}
        darkMode={darkMode}
        rootPageId={rootPageId}
        bodyClassName={bodyClassName}
      />
    </div>
  );
}
