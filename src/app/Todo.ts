export class Todo{
  sno: number
  title: string
  desc: string
  active: boolean
  constructor(sno:number,title:string,desc:string,active:boolean) {
    this.title = title
    this.sno=sno
    this.desc = desc
    this.active = active
  }
}
