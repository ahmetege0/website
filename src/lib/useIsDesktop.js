'use client'
/*
  useIsDesktop — 3D sahnenin aktif olduğu breakpoint (≥1024px).
  SSR'da ve ilk render'da false döner; mobilde 3D modüller hiç yüklenmez.
*/

import { useSyncExternalStore } from 'react'

const QUERY = '(min-width: 1024px)'

const subscribe = (cb) => {
    const mql = window.matchMedia(QUERY)
    mql.addEventListener('change', cb)
    return () => mql.removeEventListener('change', cb)
}

export function useIsDesktop() {
    return useSyncExternalStore(subscribe, () => window.matchMedia(QUERY).matches, () => false)
}
