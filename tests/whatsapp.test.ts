import { test } from 'node:test';
import assert from 'node:assert/strict';
import { inquiryMessage, validateInquiry, whatsappUrl } from '../src/lib/whatsapp.ts';
test('optional fields are accepted',()=>assert.equal(validateInquiry('','','2026-10-10'),''));
test('rejects past and impossible dates',()=>{assert.ok(validateInquiry('2026-10-09','','2026-10-10'));assert.ok(validateInquiry('2026-02-30','','2026-01-01'));assert.equal(validateInquiry('2026-12-20','','2026-10-10'),'');});
test('rejects invalid guest counts',()=>{for(const guests of ['0','-1','1.5','abc','999999999999999999'])assert.ok(validateInquiry('',guests));assert.equal(validateInquiry('','50'),'');});
test('creates a Portuguese message and encodes user input',()=>{const message=inquiryMessage('um aniversário','2026-12-20','50');assert.ok(message.includes('20/12/2026'));assert.ok(message.includes('50 convidados'));assert.equal(new URL(whatsappUrl(message)).searchParams.get('text'),message);});
