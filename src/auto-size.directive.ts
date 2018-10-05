import { Directive, ElementRef, HostListener } from "@angular/core";
@Directive({
    selector: "textarea[autosize]"
})
export class AutoSizeDirective {
    @HostListener("input", ["$event.target"])
    onInput(textArea: HTMLTextAreaElement): void {
        this.adjust();
    }

    constructor(public element: ElementRef) {
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.adjust();
        }, 1);
    }

    adjust(): void {
        // https://stackoverflow.com/a/24676492/668521
        this.element.nativeElement.style.overflow = "hidden";
        this.element.nativeElement.style.height = "5px";
        this.element.nativeElement.style.height = this.element.nativeElement.scrollHeight + "px";
    }
}