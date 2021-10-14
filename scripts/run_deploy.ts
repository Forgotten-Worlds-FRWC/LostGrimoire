import {deployConfig} from "./deployment/define-0-config";
import {deployStorage} from "./deployment/define-1-deploy-storage";
import {storeAffinities} from "./deployment/define-2-store-affinities";
import {storeTraits} from "./deployment/define-3-store-traits";
import {check} from "./deployment/define-4-check";




// comment out steps to skip
deployConfig(process.env.DEPLOYER_ADDRESS)
.then(c => deployStorage(c))
.then(c => storeAffinities(c))
.then(c => storeTraits(c)) //use this only for testing!
.then(c => check(c)) //use this only for testing!
.catch(error => {
    console.error(error);
    process.exit(1);
});


