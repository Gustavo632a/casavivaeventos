import type { ReactNode } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
export function Reveal({children,className=''}:{children:ReactNode;className?:string}) {return <div ref={useScrollReveal()} className={`reveal ${className}`}>{children}</div>;}
