import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ManufactorerCrudComponent } from './views/manufactorer-crud/manufactorer-crud.component';
import { MfCreateComponent } from './components/mf-create/mf-create.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products", component: ProductCrudComponent },
  { path: "products/create", component: ProductCreateComponent},
  { path: "products/update/:id", component: ProductUpdateComponent},
  { path: "products/delete/:id", component: ProductDeleteComponent},
  { path: "manufactorer", component: ManufactorerCrudComponent },
  { path: "manufactorer/create", component: MfCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
