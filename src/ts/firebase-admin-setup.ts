import {getApps, initializeApp, applicationDefault, cert } from 'firebase-admin/app'
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore'

import serviceAccount from '../../service-account.json'
if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount as any)
  });
}

export const db = getFirestore();