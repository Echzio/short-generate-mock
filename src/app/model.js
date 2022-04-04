import { useState, useCallback } from "react";
import { v4 } from "uuid";

const readFile = (file) => {
  return new Promise((resolve) => {
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      resolve(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  });
};

const buildFile = (file, content) => {
  const id = v4();
  const shape = {
    mimetype: file.type,
    len: file.size,
    content,
  };
  const outputFile = new File([`module.exports=${JSON.stringify(shape)}`], id, {
    type: "plain/text",
  });

  return {
    name: id,
    link: URL.createObjectURL(outputFile),
  };
};

const useFile = () => {
  const [detailLink, setDetailLink] = useState({link: '', name: ''});

  const handleGetFile = useCallback(
    async ({
      target: {
        files: [file],
      },
    }) => {
      const content = await readFile(file);
      const output = buildFile(file, content);

      setDetailLink(output);
    },
    []
  );

  return {
    handleGetFile,
    detailLink,
  };
};

export { useFile };
