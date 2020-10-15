import { Component, OnInit } from '@angular/core';
import { Project } from "../../models/project";
import { ProjectService} from "../../services/project.service";
import { UploadService} from "../../services/upload.service";
import { Router, ActivatedRoute, Params} from "@angular/router";
import { Global} from "../../services/global";

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService] // Cargar el objeto
})
export class EditComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload: Array<File>;
  public save_project;
  public url: string;
  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = "Editar Proyecto";
    this.url = Global.url;

  }
  ngOnInit(): void {
    this._route.params.subscribe(params => { // Obtiene el id desde la url
      let id = params.id;
      this.getProject(id);

    });

  }

  getProject(id){
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;

      },
      error => {
        console.log(<any>error);
      });
  }

  onSubmit(){
    this._projectService.updateProrject(this.project).subscribe(
      response =>{
        if(response.project){
          if (this.filesToUpload){
            this.status = 'success';
            //subir la imagen
            this._uploadService.makeFileRequest(Global.url + "upload-image/" + response.project._id,[],this.filesToUpload,'image').
            then((result:any) => {
              this.status = 'success';
              this.save_project = result.project;

            });
          }else {
            this.save_project = response.project;
            this.status = 'success';
          }

        }else{
          this.status = 'failed';
        }
      },
      error =>{
        console.log(error);
      }
    );
  }
  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;

  }


}
