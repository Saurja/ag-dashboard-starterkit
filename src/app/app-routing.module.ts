import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./starter/starter.module").then((m) => m.StarterModule),
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./starter/starter.module").then((m) => m.StarterModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
