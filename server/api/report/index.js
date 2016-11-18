'user strict';

import {
  Router
} from 'express';
import * as controller from './report.controller';
import * as auth from '../../auth/auth.service';

var router = Router();

router.get('/', auth.hasRole("admin"), controller.index);
router.get('/:year',  controller.getYear);
// router.get('/:id',  auth.hasRole("admin"), controller.show);
router.post('/',  auth.hasRole("admin"), controller.create);
router.post('/:id',  auth.hasRole("admin"), controller.update);
// router.patch('/:id', auth.isAuthenticated(), controller.update);
// router.delete('/:id', auth.isAuthenticated(), controller.destroy);

module.exports = router;
