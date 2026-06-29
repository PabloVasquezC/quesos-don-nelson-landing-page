import {NextStudio} from 'next-sanity/studio'
import {metadata} from 'next-sanity/studio'
import config from '@/sanity/sanity.config'

export const metadata = {
  ...metadata,
  title: 'Studio - Quesos Don Nelson',
}

export default function StudioPage() {
  return <NextStudio config={config} />
}
