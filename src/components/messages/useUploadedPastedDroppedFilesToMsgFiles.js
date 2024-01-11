import { useContext } from "react";
import { Context } from "../../Context";

export default function useUploadedPastedDroppedFilesToMsgFiles() {

  const { messagesSet } = useContext(Context)

  function uploadedPastedDroppedFilesToMsgFiles(files) {
    Object.values(files)?.map((file, fileInd) => {
      // remove all dots not last . + add unix to name
      const fileRenamed = new File([file], file.name.replace(/\.(?!$)/g, "").split(".")[0] + Date.now() + "." + file.name.split(".")[1]) // eg: image1695902498918.png
      if (fileInd === 0) {
        messagesSet(prev => prev.map((message, ind) => ind === 0 && ({ ...message, file: fileRenamed }))) // in 1 message leave prev msg (text) + add 1 file
      } else {
        messagesSet(prev => [...prev, { msg: "", file: fileRenamed }]) // in other msgs add new files with empty msg
      }
    })
  }

  return { uploadedPastedDroppedFilesToMsgFiles }
}
