(async () => {
  const sitemap = await (await fetch('https://bigfive-test.com/sitemap.xml')).text()

  function extractUrls(xml) {
    const urls = [];
    const locRegex = /<loc>(.*?)<\/loc>/g;
    const hrefRegex = /href="(.*?)"/g;

    let match;
    while ((match = locRegex.exec(xml)) !== null) {
      urls.push(match[1]);
    }
    while ((match = hrefRegex.exec(xml)) !== null) {
      urls.push(match[1]);
    }

    return urls;
  }


  const urls = extractUrls(sitemap);

  console.log(urls);

  const data = {
    "host": "https://bigfive-test.com",
    "key": "eab3c341d0644b1483f6ce1f88f464bc",
    "keyLocation": "https://bigfive-test.com/eab3c341d0644b1483f6ce1f88f464bc.txt",
    "urlList": urls
  }

  const indexNow = await fetch(
    'https://api.indexnow.org/IndexNow',
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  console.log(indexNow.status)
})()
