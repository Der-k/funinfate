import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./sanity/schemaTypes";
import { projectId, dataset, apiVersion } from "./sanity/env";

export default defineConfig({
  name: "default",
  title: "Funinfate",

  projectId,
  dataset,
  apiVersion,

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});