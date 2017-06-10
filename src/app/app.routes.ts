import { PublicDealsComponent } from "app/deals/public-deals.component";
import { PrivateDealsComponent } from "app/deals/private-deals.component";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "app/authentication/auth-guard.service";
import { CallbackComponent } from "app/authentication/callback.component";

const appRoutes = [
    {
        path: '',
        redirectTo:'/deals',
        pathMatch:'full'
    },
    {
        path:'deals',
        component: PublicDealsComponent
    },
    {
        path:'private',
        component: PrivateDealsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'callback',
        component: CallbackComponent,
  }
];

export const routing = RouterModule.forRoot(appRoutes);
