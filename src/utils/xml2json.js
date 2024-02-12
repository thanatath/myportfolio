const convertXmlToJson = (xmlString) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
  
    const convertNodeToJson = (node) => {
      const obj = {};
  
      if (node.nodeType === 1) {
        // Element node
        if (node.hasChildNodes()) {
          node.childNodes.forEach((childNode) => {
            const childObj = convertNodeToJson(childNode);
            if (obj[childNode.nodeName]) {
              if (!Array.isArray(obj[childNode.nodeName])) {
                obj[childNode.nodeName] = [obj[childNode.nodeName]];
              }
              obj[childNode.nodeName].push(childObj);
            } else {
              obj[childNode.nodeName] = childObj;
            }
          });
        }
      } else if (node.nodeType === 3 && node.nodeValue.trim() !== '') {
        // Text node
        return node.nodeValue;
      } else if (node.nodeType === 4) {
        // CDATA node
        return node.nodeValue;
      }
  
      return obj;
    };
  
    return convertNodeToJson(xmlDoc.documentElement);
  };

 export {convertXmlToJson}