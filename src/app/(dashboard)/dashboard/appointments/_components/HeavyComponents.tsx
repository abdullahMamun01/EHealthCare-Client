import React from 'react'
const delay = (ms: number) => new Promise((resolve) => setTimeout(() => resolve('hello'), ms));
export default async function HeavyComponents() {
    await delay(10000);
  return (
    <div>HeavyComponents</div>
  )
}
