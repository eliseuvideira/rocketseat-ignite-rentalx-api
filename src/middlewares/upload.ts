import createUpload from "@ev-fns/upload";
import path from "path";

export const uploadCsv = createUpload({
  field: "csv",
  fileSize: 50 * 1024 * 1024,
  storagePath: path.join(__dirname, "..", "..", "storage"),
  storageType: "disk",
  mimetypes: ["text/csv"],
});
