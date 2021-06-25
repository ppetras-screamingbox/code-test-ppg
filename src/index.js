import { makeUtils } from './utils/index.js'
import { makeApp } from './app/index.js'

(async () => {
  const utils = makeUtils()
  const app = await makeApp(utils)
  app.run({
    a : 'foo',
    b : 'bar',
    c : null,
    d : undefined,
    e : 0,
    f : {
      a : 'fuz',
      b : null,
      c : {
        a : 'biz',
        b : 'buz',
        c : [
          {
            a : 'foo',
            b : 'bar',
            c : null,
            d : undefined,
            e : 0,
            f : false
          },
          {
            a : 'foo',
            b : 'bar',
            c : null,
            d : undefined,
            e : 0
          },
          {
            a : 'foo',
            b : 'bar',
            c : null,
            d : undefined,
            e : 0
          }
        ]
      }
    }
  })
})()
