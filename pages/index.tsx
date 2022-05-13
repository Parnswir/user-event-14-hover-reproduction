import Tippy from '@tippyjs/react'

export default function Home() {
  return (
    <main>
      <Tippy content={<div>Tooltip Content</div>}>
        <div>
          <div>
            <span style={{
              backgroundColor: 'lightblue',
            }}>Nested Content</span>
          </div>
        </div>
      </Tippy>
    </main>
  )
}
