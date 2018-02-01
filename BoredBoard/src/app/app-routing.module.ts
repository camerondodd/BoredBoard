import {DirectoryComponent} from "./directory/directory.component";
import {HomeComponent} from "./home/home.component";
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";

const routes: Routes = [
	{
		path: 'directory',
		component: DirectoryComponent,
		pathMatch: "full"
	},
	{
		path: "**",
		component: HomeComponent,
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})

export class AppRoutingModule {

};