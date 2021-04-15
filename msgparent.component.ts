import {Component} from '@angular/core';

@Component({
    selector:'msgparent-comp',
    template:'<div><h1>{{parentmsg}}</h1><msgchild-comp [childmsg]="sendmsg"></msgchild-comp></div>',
    styles:['div{width:200px;height:200px;background-color:blue;color:white;}']
})
export class MsgParentComponent{
    parentmsg:string="This is a Parent Component!!";
    sendmsg:string="This message is passed from Parent to Child!!";
}