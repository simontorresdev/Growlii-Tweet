import admin from 'firebase-admin'

try {
  admin.initializeApp({
    credential: admin.credential.cert({
      project_id: 'growlii-ensayo',
      private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCeoQdytACc4jxg\nxDbe7wTBK2fvX/njABVERtq8GlS+UwT6f9Tqjguzty8PX/k9LVi1msVKBHw+yEtM\nOVacQCOboRjv/UJDPcI+VrbEdzSb6cM66yMSyThLEqM4NJEWSF0KQILypnNktTfw\nNwNw3aA7JXyyk00HE35icX+r5nZXQFlbFj97AU2g9K6rHbHI4bItfjvfyKtWysdD\nk1xH+uncKvq/kB50e+ujUSoTnUrmhF9Gzmru+4fGMD4lOgjYEmRFvGFcd96qHfEw\nalDma6BOtPcAWhZpuelRkJOH+bHo6SDNPy5+9GCw2SfiyYYTZt21pn4Vb5dMtxZ/\n721VotD/AgMBAAECggEAA2jBkLkGpFiGZKwC4+KuLvqgVrgw1iybyGZfcBh+xsJh\nAoM5z7qyzK98ru9om2R8mhaT8+XJx82lNKOs1VnZihA5yXqfcHOE17MkZW+MbWdm\nPz9rdw1lDNP/NweGMLzoZv6A8fca1sjARYThKY1R0sOY/PuGdcb4+eOnk0m2NGTQ\neDc/+E3LWeBPz1Siseyy7SOZ6Tz0Q5co4HL5uiKKTjXC5Okr/45xGRLHTxEtvu6w\nuvrAhpaHRw+VgS38VlMe2dvvYVcbOLgzqOw6e9IF73KPnszqcALO/zzJXxDW62r1\nU0QHsRiSe6tEKIZDcWDWPER60cgq67Vt/X6dej2YwQKBgQDXsnT0SWKaXGrg+XI1\nFBuc2eoBXnc5dhQni/CYm3/wgI6WVkgNvFC/sca9aBR4DnE5LthoWWC5c3PTMVqF\nZS6bnyj0sl7zD4NCbHAbi9Y5TVLihSvqM53n/tWjl2RY9LbSQrXQZyZUE4w6R8a0\n95dar9TgwyuvLf4oIyrpJ82PQQKBgQC8RM6yyJvyH5zakpmUagBcyPyjCu4dt73m\nZlPxLtcLCImP0a/c+BDhVLW0CVJU3ltdxSzmFAEoXaqYEgvEdc42zA5WWX320DxI\nmOwMc00El1SeL0qqLhFHvoypQ7KFhxNdUDhQKno/GR7LSsfvQQTtPR+pc4dM7MRv\nsaCgA3iQPwKBgAbMt2ckERmwpCXndzQ5KA2vyPK2GagUEtqUTMdiz4uzYctXePoF\n373LSuqZp1uJiQQ2d9gCSUxPWW1k9ueRowCA6fecz+V1rbugU4BqzhwMVfqSHCpL\n6kRwAiggE6fCPykttTGWrtyjqR4FOTxnObxAIsPbIztohcSaJzYmbRKBAoGAfIX6\nPRAo7T1xjrQWNq7h7HzXdLOfCTLlvMWD0etMOrT7348uhbXh3FgeEqVzukSUI/Jt\nnwQuO9ewJQMSm2/b5CyVcxGgGiZjKRVUU2vTziyVwEbBWMw9i7mB6dan9l+ANGEB\nziw6TQ+9aXLdyOa1boDWN0r9e6jCyKmw9wU0shsCgYBv9z3Wo6Z+YH/dmVB42LW1\nwTayiCdnnFcsJqTriFiJHszyogb4VahJo8zsPba/mtJ7b9b/hUsSUPaNsD0h+G5U\nhcy774eWpvpeYUjiAZu4fZMG7aYq3e1R3aibfKMurRjn0xAV4EiWN4+TmqeBF2H1\nPPNuY/SIQo/hcyAoDgzL6Q==\n-----END PRIVATE KEY-----\n',
      client_email: 'firebase-adminsdk-iwm6l@growlii-ensayo.iam.gserviceaccount.com'
    }),
    databaseURL: 'https://growlii-ensayo.firebaseio.com'
  })
} catch (error) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error.message)) {
    // eslint-disable-next-line no-console
    console.error('Firebase admin initialization error', error.stack)
  }
}

export const firestore = admin.firestore()
