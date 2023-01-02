import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "sliceWords" })
export class SliceWordsPipe implements PipeTransform {
  transform(value: string | undefined, start: number, end?: number): string {
    if (value == null || value == undefined) return '';

    return value
      .split(" ")
      .splice(start, end)
      .join(" ");
  }
}
