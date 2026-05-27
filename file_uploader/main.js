class Page {
  constructor() {
    this.btn = document.createElement('button')
    this.btn.textContent = 'Pick Directory'
    this.display = document.createElement('div')
    this.body = document.body ;

    this.init()
  }

  init() {
    this.btn.addEventListener('click', async () => {
      try {
        const dirHandle = await window.showDirectoryPicker()

        for await (const entry of dirHandle.values()) {
          if (entry.kind === 'file') {
            console.log('FOUND', entry.name)
            const file = await entry.getFile()
            const text = await file.text() 

            const p = document.createElement('p')
            p.textContent = `${file.name}: ${text}`
            this.display.append(p)
          }
        }

        this.render()
      } catch(err) {
        throw new Error(err.message)
      }
    })
  }

  render = () => {
    this.body.append(this.btn)
    this.body.append(this.display)
  }
}

const page = new Page()
page.render()