# @bigfive-org/score

Calculate score for big five tests

## Installation

```
$ npm i @bigfive-org/score
```

## Usage

Pass an object with property **answers**.
Answers have to be an Array with domain and score. Facet is optional.

```JavaScript
const calculateScore = require('@bigfive-org/score')
const result = {
  "timeElapsed": -51,
  "ip": "127.0.0.1",
  "lang": "en",
  "test": "50-IPIP-NEO-PI-R",
  "totalQuestions": 50,
  "answers": [
    {
      "domain": "A",
      "facet": "1",
      "score": "3"
    },
    {
      "domain": "A",
      "facet": "1",
      "score": "3"
    },
    {
      "domain": "E",
      "facet": "1",
      "score": "3"
    },
    {
      "domain": "E",
      "facet": "2",
      "score": "3"
    }
  ]
}

calculateScore(result)
```

returns score for each factor

```JavaScript
{
  'A': {
    'score': 6,
    'count': 2,
    'result': 'neutral',
    'facet': {
      '1': {
        'score': 6,
        'count': 2,
        'result': 'neutral'
      }
    }
  },
  'E': {
    'score': 6,
    'count': 2,
    'result': 'neutral',
    'facet': {
      '1': {
        'score': 3,
        'count': 1,
        'result': 'neutral'
      },
      '2': {
        'score': 3,
        'count': 1,
        'result': 'neutral'
      }
    }
  }
}
```

## Advanced

If you want to override **result** pass a function as the **calculateResult** property

The function signature must be

```JavaScript
function (score, count) {
  'use strict'
  // Do something
  return 'value'
}
```

Example

```JavaScript
const calculateScore = require('@alheimsins/bigfive-calculate-score')

const calculateResult = (score, count) => {
  const average = score / count
  let result = 'nøytral'
  if (average > 3) {
    result = 'høy'
  } else if (average < 3) {
    result = 'lav'
  }
  return result
}

const result = {
  "timeElapsed": -51,
  "ip": "127.0.0.1",
  "lang": "en",
  "test": "50-IPIP-NEO-PI-R",
  "totalQuestions": 50,
  "calculateResult": calculateResult,
  "answers": [
    {
      "domain": "A",
      "facet": "1",
      "score": "3"
    },
    {
      "domain": "A",
      "facet": "1",
      "score": "3"
    },
    {
      "domain": "E",
      "facet": "1",
      "score": "3"
    },
    {
      "domain": "E",
      "facet": "2",
      "score": "3"
    }
  ]
}

calculateScore(result)
```

Returns

```JavaScript
{
  'A': {
    'score': 6,
    'count': 2,
    'result': 'nøytral',
    'facet': {
      '1': {
        'score': 6,
        'count': 2,
        'result': 'nøytral'
      }
    }
  },
  'E': {
    'score': 6,
    'count': 2,
    'result': 'nøytral',
    'facet': {
      '1': {
        'score': 3,
        'count': 1,
        'result': 'nøytral'
      },
      '2': {
        'score': 3,
        'count': 1,
        'result': 'nøytral'
      }
    }
  }
}
```

## License

[MIT](LICENSE)
