import { Subject } from "rxjs";

const sub=new Subject();

export const dataService={
    sendMessage :(message) =>

    sub.next(
        {
            text:message
        }
    ),
    getMessage :() =>
    sub.asObservable(),
 
    clearMessage:() => 
    sub.next({})
}
