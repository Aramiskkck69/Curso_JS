import { Component, OnInit } from '@angular/core';

import { Project } from "../../models/project";
import { ProjectService} from "../../services/project.service";
import { UploadService} from "../../services/upload.service";
import { Global} from "../../services/global";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService] // Cargar el objeto
})
export class CreateComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload: Array<File>;
  public save_project:Project;
  public url: string;
  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) {
    this.title = "Crear Proyecto";
    this.url = Global.url;
    this.project = new Project('','','','', 2020,'','');
  }

  ngOnInit(): void {
  }
  onSubmit(form){
    this._projectService.saveProject(this.project).subscribe(
      response =>{
          if(response.project){
            //subir la imagen
            this._uploadService.makeFileRequest(Global.url + "upload-image/" + response.project._id,[],this.filesToUpload,'image').
            then((result:any) => {
              this.status = 'success';
              this.save_project = result.project;
              console.log(typeof (this.save_project));
              form.reset();
              console.log("estoy dentro del xxx");
            });
          }else{
            this.status = 'failed';
            console.log("estoy dentro del error 1");
            form.reset();
          }
      },
      error =>{
        console.log(error);
        this.status = 'failed';
        console.log("estoy dentro del error 2");
      }
    );
  }
  fileChangeEvent(fileInput: any){
      this.filesToUpload = <Array<File>>fileInput.target.files;

  }
}
