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
    "key": "b1552373cc7640369b69b88ea37e9476",
    "keyLocation": "https://bigfive-test.com/b1552373cc7640369b69b88ea37e9476.txt",
    "urlList": urls
  }

  const indexNow = await fetch(
    'https://bing.com/IndexNow',
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
