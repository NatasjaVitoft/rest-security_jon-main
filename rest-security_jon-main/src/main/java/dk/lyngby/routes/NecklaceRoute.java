package dk.lyngby.routes;

import dk.lyngby.controller.impl.JewelryController;
import dk.lyngby.security.RouteRoles;
import io.javalin.apibuilder.EndpointGroup;

import static io.javalin.apibuilder.ApiBuilder.*;

public class NecklaceRoute {
    private final JewelryController jewelryController = new JewelryController();

    protected EndpointGroup getRoutes() {

        return () -> {
            path("/jewelry", () -> {
                get("/necklace", jewelryController::readType, RouteRoles.ANYONE);
            });
        };
    }
}