import { EventData, Page, NavigatedData } from '@nativescript/core';
import { DestinationDetailViewModel } from '../view-models/destination-detail-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    const destination = args.context;
    page.bindingContext = new DestinationDetailViewModel(destination);
}