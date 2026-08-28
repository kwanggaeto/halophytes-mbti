"use client";

import { useState } from "react";

type DownloadButtonProps = Readonly<{
  imagePath: string;
  filename: string;
}>;

const DOWNLOAD_LABEL = "이미지 다운로드";
const DOWNLOADING_LABEL = "다운로드 준비 중…";
const DOWNLOAD_ERROR_MESSAGE = "다운로드에 실패했습니다. 다시 시도해 주세요.";

export function DownloadButton({ imagePath, filename }: DownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleDownload() {
    if (isDownloading) {
      return;
    }

    setIsDownloading(true);
    setErrorMessage("");

    try {
      const response = await fetch(imagePath);

      if (!response.ok) {
        throw new Error(`Image request failed with ${response.status}`);
      }

      const imageBlob = await response.blob();
      const objectUrl = URL.createObjectURL(imageBlob);
      const downloadAnchor = document.createElement("a");

      downloadAnchor.href = objectUrl;
      downloadAnchor.download = filename;
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 0);
    } catch {
      setErrorMessage(DOWNLOAD_ERROR_MESSAGE);
    } finally {
      setIsDownloading(false);
    }
  }

  return (
    <div className="download-area">
      <button
        className="download-button"
        type="button"
        disabled={isDownloading}
        onClick={handleDownload}
      >
        <svg
          aria-hidden="true"
          className="download-icon"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" />
        </svg>
        <span>{isDownloading ? DOWNLOADING_LABEL : DOWNLOAD_LABEL}</span>
      </button>
      <p className="download-error" aria-live="polite">
        {errorMessage}
      </p>
    </div>
  );
}
