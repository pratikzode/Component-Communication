import {Component, Input} from '@angular/core';

@Component({
    selector:'msgchild-comp',
    template:'<mark>{{childmsg}}</mark>',
    styles:['div{width:200px;height:200px;background-color:blue;color:white;}']
})
export class MsgChildComponent{
   @Input() childmsg:string;
}